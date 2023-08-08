interface Item {
    id : string;
    label : string;
    content: string;
}

interface Props {
    Items : Item[]
}

const Accordion = ( {Items} : Props) => {
    const renderItems = Items.map((item) => {
        return (
            <div key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        );
    })

    return renderItems;
}

export default Accordion;