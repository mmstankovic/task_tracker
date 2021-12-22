import { useState } from "react"

const AddTask = ({add}) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task")
        }

        add({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)

    }

    return (
        <form className="add-form" onSubmit={submit}>
            <div className="form-control">
                <label>Add Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Add Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"  checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask