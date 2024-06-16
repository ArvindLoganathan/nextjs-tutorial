import type { Metadata } from "next";
// import Login from "../components/Login";

export const metadata: Metadata = {
  title: "Questionnaire",
  description: "sidebar with question",
};

export default function QuestionnaireLayout({
  children,
  ques,
  sidebar,
  login
}: Readonly<{
  children: React.ReactNode;
  ques: React.ReactNode;
  sidebar:React.ReactNode;
  login:React.ReactNode;
}>) {
  const isLogin = false;
  // if(isLogin){
  //   // return <Login>Please Login</Login>
  //   return <div>{login}</div>
  // } 
  return (
    <div>
     {children}
     {isLogin?login 
      :
      <div style={{display:"flex",margin:"10px"}}>
      {sidebar}
      {ques}
      </div>
      }
    </div>
  );
}
