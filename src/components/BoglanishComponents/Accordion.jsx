// import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;

const Accordion = ({questions}) => {
    



    const { token } = theme.useToken();
    const panelStyle = {
      marginBottom: 24,
      borderRadius: token.borderRadiusLG,
      border: "none",
    };
  return (
    <Collapse
      accordion
      bordered={false}
      //   defaultActiveKey={["1"]}
      //   expandIcon={({ isActive }) => (
      //     <CaretRightOutlined rotate={isActive ? 90 : 0} />
      //   )}
      style={{
        opacity: 1,
      }}
    >
        {questions.map((q, index)=>{
            return (
              <Panel header={q.question} key={index} style={panelStyle} className='bg-blue-500'>
                <p>{q.answer}</p>
              </Panel>
            );
        })}
      
    </Collapse>
  );
}

export default Accordion