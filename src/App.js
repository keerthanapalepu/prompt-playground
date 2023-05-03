import React, { useState } from 'react';
import { Row, Col, Checkbox, Layout, Menu, Select,Input, Button, Card, Space, Typography } from 'antd';
import axios from 'axios';
const { Title } = Typography;
const { Option } = Select;
const { SubMenu } = Menu;
const { Content } = Layout;

const App = () => {
  const userId = "xyz"
  const [checkedItems, setCheckedItems] = useState([]);
  const [ageChecked, setAgeChecked] = useState(false);
  const [output, setOutput] = useState({})
  const [ageValue, setAgeValue] = useState("Below 18");
  const [mentalHealthChecked, setMentalHealthChecked] = useState(false);
  const [mentalHealthValue, setMentalHealthValue] = useState("very serious");
  const [genderChecked, setGenderChecked] = useState(false);
  const [genderValue, setGenderValue] = useState("Man");
  const [medicationChecked, setMedicationChecked] = useState(false);
  const [medicationValue, setMedicationValue] = useState("have never taken medication");
  const [professionChecked, setProfessionChecked] = useState(false);
  const [professionValue, setProfessionValue] = useState("working professional"); 
  const [selfCareChecked, setSelfCareChecked] = useState(false);
  const [selfCareValue, setSelfCareValue] = useState("haven't tried much"); 
  const [currentIssue, setCurrentIssue] = useState('');
  const [mt, setmt] = useState([]);

  const options = [
    'I blame myself for believing that only bad things happen to me',
    'I feel unworthy of talking to popular kids in school',
    'With so many of my relationships and friendships not having made it, I just don’t know how to cope with impermanence. I feel strange getting attached because it’s so hard to control things that are not even in my control',
    'I wish the system was designed to work for women instead of against us',
    'I fear self-love is not for me',
    'I don’t know how to receive compliments',
    "I am feeling exhausted because of my workload. I also don't know how to say no to taking more tasks at work",
    'I might be a little afraid of change/positive change',
    'I worry about my career not heading in the right direction',
    'I want to improve my relationship with my body',
    'I want to finally start prioritizing my mental health this year',
    'I have not explored my potential to fully understand what my capabilities are',
    'I want to limit my hours on social media',
    'I am afraid of quitting my current job and exploring a new career path',
    "I can't move on from my ex",
    'I fear losing my job',
    'I want to make time for my hobbies, today',
    'I get nervous at the thought of settling down with my partner',
    'I keep procrastinating',
    'I often feel guilty when enjoying my leisure time',
    "I'm always being a bit paranoid about cheating because I discovered my father's infidelity toward my mother. I thought I’d overcome this, but in my past relationships partners have been dishonest with me, making me more fearful",
    'I am unable to set goals for this year',
    "I constantly think that I’m not good enough, or think about what-ifs. Even if it’s an easy task, I freeze every time I'm trying to work on it. I feel frustrated because it is something I really want to do but I can't seem to push myself through it",
    'I’ve always had sleep issues because I’ve messed up my sleep by either doing extra work or I have disturbing dreams of me messing things up at work',
    'I feel frustrated because I lack the self-discipline it takes to make lasting, positive changes in my life',
    'I hate being labeled as selfish just because I’m an entrepreneur',
    'Testing the Glitch',
    'I am feeling angry on my friend because he is playing games in from of me ',
    'My parent, whom I lost, wanted me to clear my exams. I want to succeed for them and me..but it’s very tough, and I just feel like I’m not smart',
    "I can't let go of my failures",
    "I am scared to hurt people's feelings",
    'I fear people will not approve of me if I speak my mind',
    "I'm scared of taking opportunities that might help my career grow",
    'I feel like my parents don’t love me because they don’t call to check in on me',
    'I feel anxious because I don’t know where my business is going',
    'I am feeling bad because my friend was playing with my emotions',
    'I feel hurt when my parents shut me down for being too emotional',
    'I want to be more productive with my time',
    'I often resent myself for taking on too many tasks at work',
    'I want to communicate my boundaries healthily',
    'I feel like I made a mistake by starting my own business',
    'I am still regretting something I did in the past',
    'I am afraid of my own self',
    'I feel lonely this Valentine’s Day',
    'I feel like I am too stressed all the time. The more stressed I am, the lesser I sleep',
    'I feel like a failure in all aspects of my life',
    "I never sit back and think about how I’m really feeling. I just feel embarrassed. I feel like if I admit my feelings, people will just think I'm a failure, and I should not be feeling like this. How could I allow myself to get to this?",
    'created for testing',
    'I feel too exhausted to do any household chores after working all day',
    'I fear that my partner does things to upset me on purpose',
    "Since childhood, I’ve constantly felt like a failure. Someone who can't do anything right and I have to pretend so nobody finds out that I'm useless",
    'My family does not respect my privacy',
    "I feel annoyed that my partner wants to indulge in PDA when I don't ",
    'I hate that every holiday season my family makes me feel small',
    'I fear disappointing other people and not living up to their expectations',
    'I am feeling a bit heavy because my plans are not working out',
    'I want to be more assertive at work',
    'I fear speaking in public',
    'I want to be more productive during meetings',
    "I have friends that I like being around, but I am afraid of letting them in because I'm having a hard time confiding in them",
    'My boss mistreats me and I hate it',
    'I want to untangle the chaos in my mind',
    "I try to suppress my depression, but it is really difficult. I see a light that one day I'll get well. But I'll just have to wait until then",
    "I'm unable to sleep a night before important events",
    "I have recently experienced failure and I don't know how to move forward",
    'I am scared of breaking down uncontrollably in front of someone while talking about my loss',
    'I fear peers in my new university will not accept me in their groups',
    'I am overwhelmed by the need to record every event in my life',
    'I feel sad seeing my friends have loving parents while my parents are distant',
    "I feel like I'm simply wasting my life away",
    'I find it difficult to confide in my parents',
    "I often have a really messy mind, and I can't seem to focus well at all. I sabotage myself by doing things that I know will hurt me later",
    "I have goals for this summer but I already feel paralyzed with fear that I lack enough skill and will make a fool of myself no matter how prepared I think I am. I'm already talking myself out of it before it's begun",
    "I don't know how I feel",
    'My partner expresses love for me but doesn’t act like it',
    'I am struggling to find my passion',
    'I feel bad as I upset people by interrupting them mid-speech ',
    'I have too much work and too little time',
    'testing changes edit',
    'I feel like I might have a panic attack',
    'I feel like I never live up to my expectations as an entrepreneur',
    'I am so stressed about my studies',
    'I want to be a better listener',
    "I just can't make decisions on my own",
    'I fear I will not make it big as an entrepreneur',
    'I have no time for my hobbies',
    "I am alone most of the time, and it doesn't feel very good",
    'I feel like crying',
    'I fear there will be war in my country because of the state of the world',
    "I'm annoyed that my family thinks social media is a replacement for therapy",
    'I feel scared to ask questions in class',
    'I am tired of trying again and again nothing works',
    'My family does not respect my privacy'
  ]
  const handleSelectChange = (value) => {
    setmt([...mt, value]);
  };

  const handleInputChange = (event) => {
    setmt([...mt, event.target.value]);
  };
  const handleRemoveClick = (index) => {
    const updatedDiscomforts = [...mt];
    updatedDiscomforts.splice(index, 1);
    setmt(updatedDiscomforts);
  };

  const handleAgeCheck = (e) => {
    setAgeChecked(!ageChecked);
  };
  const handleMenuAgeClick = (e) => {
    setAgeValue(e.key);
  };

  const handleMentalHealthCheck = (e) => {
    setMentalHealthChecked(e.target.checked);
  };
  const handleMenuMentalHealthClick = (e) => {
    setMentalHealthValue(e.key);
  };

  const handleGenderCheck = (e) => {
    setGenderChecked(e.target.checked);
  };
  const handleMenuGenderClick = (e) => {
    setGenderValue(e.key);
  };

  const handleMedicationCheck = (e) => {
    setMedicationChecked(e.target.checked);
  };
  const handleMenuMedicationClick = (e) => {
    setMedicationValue(e.key);
  };

  const handleProfessionCheck = (e) => {
    setProfessionChecked(e.target.checked);
  };
  const handleMenuProfessionClick = (e) => {
    setProfessionValue(e.key);
  };

  const handleSelfCareCheck = (e) => {
    setSelfCareChecked(e.target.checked);
  };
  const handleMenuSelfCareClick = (e) => {
    setSelfCareValue(e.key);
  };

  var prompt = `You are a mental health professional and your tasks are to first find relevant information about the mental health issue from the top mental health databases, and then to educate the patient based on the relevant information, describing the given mental health problem \
  and also give a very relevant journaling prompt to the patient. 
  Write the message based on the information 
  provided in the patient details delimited by  
  triple backticks. The mental health problem is delimited by <>. 
  Refer to the patient as: first_name 
  The description is intended for patients,  
  so should be non-technical in nature and comforting. Do not make it sound generic. And, use long answers with examples.
  `

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = {
      "prompt": prompt,
      "patient_details": {
        "age": ageChecked? ageValue : null,
        "gender": genderChecked? genderValue : null,
        "profession": professionChecked? professionValue : null,
        "self_care_method": selfCareChecked? selfCareValue : null,
        "discomforts": mt
      }
    }
    console.log(currentIssue, mt,selfCareValue, professionValue, medicationValue, genderValue, mentalHealthValue, ageValue );
    var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU3OTMwMjdkYWI0YzcwNmQ2ODg0NGI4MDk2ZTBlYzQzMjYyMjIwMDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2VlcnRoYW5hIFBhbGVwdSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUNOUEV1OXpaU3Y3dzdJMWd4bjZDNnFQc1VzTDI0VHdsbmNEb2s4LTJYRjZobHM9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmVpbmctYmV0YSIsImF1ZCI6ImJlaW5nLWJldGEiLCJhdXRoX3RpbWUiOjE2NjQzNDk5NjUsInVzZXJfaWQiOiJtem5UbWdrdVkyYXVKTUhGNVhrZkVBS1A2RXoyIiwic3ViIjoibXpuVG1na3VZMmF1Sk1IRjVYa2ZFQUtQNkV6MiIsImlhdCI6MTY4MzAzNDY0OSwiZXhwIjoxNjgzMDM4MjQ5LCJlbWFpbCI6ImtlZXJ0aGFuYXBhbGVwdTIwMDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTU2NDA4NjYzMTU2NTEwNjczMDEiXSwiZW1haWwiOlsia2VlcnRoYW5hcGFsZXB1MjAwMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.SiL6cfoJ79gpZOIHodq9f1Hbp2tDS0IaiKTmHLlKboBjyT8PMEiLVEFhmBwme_fuT8E9ssCS5cj6LqtWBF7j4u0MUL7SRoxAvyw9zJ2P9V60B3wTENsetdMOqxMwhrG-U_cJWx5NrEW7xLQDOeCXS3C3u_GNgAPHO9zARKN4CLgRX61aHxDTpEOBeBDd4oqWgSGjuo5Mc4CUfWuBCtkFoTkLbrPyKMZpCUGjNP8a58rR1UiUpGyvBF-4EQvUvrJwx0E26qBJ0AI_Tv8JkkIUhfV5hHdNPKD6znik4_AzeT8-hkVQ-tGxwGhChxPvrNubGBbzpy2NWAtbbl695eOCCQ"
    try {
      let config = {
        method: 'POST',
        url: `http://127.0.0.1:8000/gen/${currentIssue}`,
        data:data,
        headers: {
          Authorization: 'Bearer ' + token
        }
      };
      axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setOutput(response.data)
    })}
    catch (error) {
      console.log(error);
    }

  };
  return (
    <Layout>
      <div style={{
      display: 'flex', width: 700, padding: 30, justifyContent: "center"
      }}>
      <>
        <Title>Prompt Playground</Title>
      </>
    </div>
      <Content style={{ textAlign: 'center' }}>
        <Row>
          <Col span={12}>
      <div  style={{ padding: 50 }}>
      <div style={{ paddingLeft: 120, paddingRight: 120 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Checkbox onChange={handleAgeCheck}>Age</Checkbox>
        <Menu onClick={handleMenuAgeClick}>
          <SubMenu key="age-submenu" title={ageValue} disabled={!ageChecked}>
            <Menu.Item key="Below 18">Below 18</Menu.Item>
            <Menu.Item key="18-25">18-25</Menu.Item>
            <Menu.Item key="25-35">25-35</Menu.Item>
            <Menu.Item key="Above 35">Above 35</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      {/* <br />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Checkbox onChange={handleMentalHealthCheck}>Seriousness on mental health</Checkbox>
        <Menu onClick={handleMenuMentalHealthClick}>
          <SubMenu key="seriousness-submenu" title={mentalHealthValue} disabled={!mentalHealthChecked}>
            <Menu.Item key="just exploring">just exploring</Menu.Item>
            <Menu.Item key="not very, considering">not very, considering</Menu.Item>
            <Menu.Item key="somewhat serious">somewhat serious</Menu.Item>
            <Menu.Item key="very serious">very serious</Menu.Item>
          </SubMenu>
        </Menu>
      </div> */}
      <br />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Checkbox onChange={handleGenderCheck}>Gender</Checkbox>
        <Menu onClick={handleMenuGenderClick}>
          <SubMenu key="gender-submenu" title={genderValue} disabled={!genderChecked}>
            <Menu.Item key="man">Man</Menu.Item>
            <Menu.Item key="woman">Woman</Menu.Item>
            <Menu.Item key="non-binary">Non-Binary</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      {/* <br />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Checkbox onChange={handleMedicationCheck}>Medication</Checkbox>
        <Menu onClick={handleMenuMedicationClick}>
          <SubMenu key="medication-submenu" title={medicationValue} disabled={!medicationChecked}>
            <Menu.Item key="have never taken medication">have never taken medication</Menu.Item>
            <Menu.Item key="considering if should take">considering if should take</Menu.Item>
            <Menu.Item key="have taken medication in the past">have taken medication in the past</Menu.Item>
            <Menu.Item key="yes, taking medications">yes, taking medications</Menu.Item>
          </SubMenu>
        </Menu>
      </div> */}
      <br />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Checkbox onChange={handleProfessionCheck}>Profession</Checkbox>
        <Menu onClick={handleMenuProfessionClick}>
          <SubMenu key="profession-submenu" title={professionValue} disabled={!professionChecked}>
            <Menu.Item key="school student">school student</Menu.Item>
            <Menu.Item key="college student">college student</Menu.Item>
            <Menu.Item key="entrepreneur/freelancer">entrepreneur/freelancer</Menu.Item>
            <Menu.Item key="content creator/influencer">content creator/influencer</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <br />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Checkbox onChange={handleSelfCareCheck}>SelfCare - methods</Checkbox>
        <Menu onClick={handleMenuSelfCareClick}>
          <SubMenu key="SelfCare-submenu" title={selfCareValue} disabled={!selfCareChecked}>
            <Menu.Item key="haven't tried much">haven't tried much</Menu.Item>
            <Menu.Item key="social media mental health content">social media mental health content</Menu.Item>
            <Menu.Item key="talked to friends/family">talked to friends/family</Menu.Item>
            <Menu.Item key="journaling">journaling</Menu.Item>
            <Menu.Item key="meditation/yoga">meditation/yoga</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <br />
      </div>
      <h4>Select last 3 MTs user Worked On</h4>
      <div>
      <Select style={{ width: 300, paddingBottom: 10 }} onChange={handleSelectChange}>
      {options.map((option) => (
    <Option value={option}>{option}</Option>
  ))}
      </Select>
      <br/>
      <Input style={{ width: 300,  paddingBottom: 10  }} placeholder="Enter manually" onPressEnter={handleInputChange} />
      {mt.map((discomfort, index) => (
        <div key={index}>
          <span>{discomfort}</span>
          <Button type="link" onClick={() => handleRemoveClick(index)}>
            Remove
          </Button>
        </div>
      ))}
    </div>
    <div style={{paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label style={{ marginRight: '8px' }}>Current Core Issue:</label>
      <Input
       value={currentIssue}
        onChange={(e) => setCurrentIssue(e.target.value)}
         style={{  width: 300 }} />
      <Button type="primary" style={{ marginLeft: '8px' }} onClick={handleSubmit} >Submit</Button>
    </div>
    </div>
          </Col>
          <Col span={12}>
            <div style={{display: "flex", justifyContent:"center", paddingTop: 50}}>
              <Space align="center" size={16}>
                <Card size="small" title="GPT response" style={{ width: 400 }}>
                  <h4>{JSON.stringify(output)}</h4>
                </Card>
              </Space>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
