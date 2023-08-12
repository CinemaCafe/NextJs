import Accordion from "./components/Accordion";
import Nested from "./components/Nested";

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

    const org = [
        { orgid: 'root', orgname: 'UniTech', superorgid: '0' },
        { orgid: 'T0000', orgname: '資訊處', superorgid: 'root' },
        { orgid: 'TD100', orgname: '軟體一課', superorgid: 'T0000' },
        { orgid: 'TD200', orgname: '軟體二課', superorgid: 'T0000' },
        { orgid: 'P0000', orgname: '產品虗', superorgid: 'root' },
        { orgid: 'P1000', orgname: '產品一部', superorgid: 'P0000' },
        { orgid: 'P2000', orgname: '產品二課', superorgid: 'P0000' },
        { orgid: 'P3000', orgname: '產品三課', superorgid: 'P0000' },
        { orgid: 'P3100', orgname: '產品一課', superorgid: 'P1000' },
        { orgid: 'P3200', orgname: '產品二課', superorgid: 'P1000' },
        { orgid: 'P3210', orgname: '產品小組', superorgid: 'P3200' },
    ];
      

    return (
        <>
            {/* s<Accordion Items={items}/> */}
            <Nested orgData={org}/>
        </>
    )
}

export default CompsApp;