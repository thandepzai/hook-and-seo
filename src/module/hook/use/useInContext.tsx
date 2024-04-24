import React, { createContext, use, useCallback, useState } from "react";

interface IUserContext {
  user: string;
  testIf?: string;
  testHook?: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}


const UserContext = createContext<IUserContext>({
  user: "",
  testIf: "",
  testHook: "",
  setUser: () => {},
});

const DemoContextWithUseView = () => {
  const [user, setUser] = useState("Cu Thân");

  return (
    <UserContext.Provider
      value={{ user, setUser, testIf: "If okee", testHook: "Hook okkee" }}
    >
      <DemoUseContextView />
      <DemoUseContextSetView />
    </UserContext.Provider>
  );
};


const DemoUseContextView = () => {
  // const { user } = useContext(UserContext);
  const { user } = use(UserContext);

  // useEffect(() => console.log(console.log(use(UserContext).testHook)), []); This is Error

  const handleTestUse = () => {
    const testUse = use(UserContext);
    console.log("🚀 ~ handleTestUse ~ testUse:", testUse);
  }; /* This is Error */

  // Không nên sử dụng
  function testInFunction() {
    const testFunction = use(UserContext);
    return testFunction.testHook;
  }

  // Custom hook
  const useTestHooks = () => {
    const testHook = use(UserContext);
    return testHook.testHook;
  };


  let testIf = "";
  if (true) {
    const test = use(UserContext);
    testIf = test.testIf ?? "";
  }

  return (
    <div className="bg-slate-200 py-2">
      User in Component UseContext: {user}
      <br />
      Test Use In If: {testIf}
      <br />
      Test Use In Hook: {useTestHooks()}
      <br />
      Test Use In Function: {testInFunction()}
      <br />
      <button
        className="bg-green-400 rounded-md p-2 mt-2"
        onClick={handleTestUse}
      >
        Test Use
      </button>
    </div>
  );
};

function DemoUseContextSetView() {
  // const { user, setUser } = useContext(UserContext);
  const { user, setUser } = use(UserContext);

  return (
    <div className="bg-slate-400 py-2">
      User in Component UseContextSet: {user}
      <div>
        <button
          className="bg-green-400 rounded-md p-2 mt-2"
          onClick={() => setUser("Đẹp Zai")}
        >
          Change User
        </button>
      </div>
    </div>
  );
}

export default DemoContextWithUseView;
