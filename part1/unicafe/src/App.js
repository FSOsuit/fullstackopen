import { useState } from 'react'

const Heading = ({ heading }) => <h1>{heading}</h1>


const StatisticLine = (props) => {
    return (
        <>
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        </>
    )
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Statistics = ({ title, good, neutral, bad, all, average, percent }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <div>
                <Heading heading={title} />
                No feedback given
            </div>
        )
    }
    return (
        <div>
            <Heading heading={title} />
            <table>
                <tbody>

                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={all} />
                <StatisticLine text='average' value={average} />
                <StatisticLine text='percent' value={percent} />
                </tbody>
            </table>
        </div>
    )

}

const App = () => {
    const title = "Give feedback"
    const title2 = "Statistics"
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const goodIncrese = () => {
        setGood(good + 1)
        const updatedGood = good + 1
        setGood(updatedGood)
        setAll(updatedGood + neutral + bad)
    }
    const neutralIncrese = () => {
        setNeutral(neutral + 1)
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setAll(good + updatedNeutral + bad)
    }
    const badIncrese = () => {
        setBad(bad + 1)
        const updatedBad = bad + 1
        setBad(updatedBad)
        setAll(good + neutral + updatedBad)
    }

    const average = (good + neutral*0 + bad*(-1)) / all
    const percent = good / all * 100 + ' %'
 
    return (
        <div>
            <Heading heading={title} />
            <Button handleClick={goodIncrese} text="good" />
            <Button handleClick={neutralIncrese} text="neutral" />
            <Button handleClick={badIncrese} text="bad" />
            <Statistics 
            title={title2} good={good} 
            neutral={neutral} bad={bad} 
            all={all} average={average} 
            percent={percent} />

        </div>
    )
}

export default App;
