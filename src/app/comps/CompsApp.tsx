import Accordion from "./components/Accordion";

const CompsApp = () => {
    const items = [
        {
            id: 'asdxs',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'zxcsd',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript on any project you want.'
        },
        {
            id: 'jkinb',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.'
        }
    ]

    return (
        <Accordion Items={items}/>
    )
}

export default CompsApp;