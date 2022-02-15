import Typist from "react-typist";

export default () => {
    return <div style={{color: "white", marginBottom: '10px', height: '850px'}}>
        <div style={{height: '300px'}} />
        <h1>Tamar Miller</h1>
        <Typist>
            <span>Programmer. </span>
            <Typist.Delay ms={500} />
            <span>Problem Solver. </span>
            <Typist.Delay ms={500} />
            <span>Coder </span>
        </Typist>
    </div>
}