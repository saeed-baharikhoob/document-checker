import './App.css'
import HorizontalList from "./components/HorizontalList.tsx";
import logo from './assets/logo.svg'
import {useState} from "react";
import { ListItem} from "./utils/types";
import Stepper from "./designSystem/Stepper/Stepper.tsx";
import CheckProcessList from "./components/CheckProcess/CheckProcessList.tsx";
function App() {
    const [item, setItem] = useState<ListItem | null>(null)
    const [showCheckProcess, setShowCheckProcess] = useState<boolean>(false)

  return (
    <div className={'flex flex-col items-center p-10 '}>
        <div className={'flex flex-col items-center justify-center space-y-2 mb-5'}>
            <div className={'flex items-center justify-center space-x-5'}>
                <div className={'flex flex-col items-center justify-center space-y-2'}>
                <span className={'text-5xl font-semibold text-white'}>Document Checker</span>
                <span className={'text-xl text-stepper-text-type'}>Choose the document type to check</span>
                </div>
                <img src={logo} alt={'logo'} className="w-14 h-14 object-contain"/>
            </div>
        </div>
        <div className={'flex flex-col items-start justify-start'}>
            <div className={' w-full '}>
                <HorizontalList selectedItem={(item) => {
                    setItem(item)
                }}/>
            </div>
            <div className={' w-full '}>
                {item && !showCheckProcess && <Stepper steps={item?.steps} showCheckProcess={() => {
                    setShowCheckProcess(true)
                }}/>}
            </div>
            <div className={'px-10 w-full mt-10'}>
              {item && showCheckProcess && <CheckProcessList items={item.checkProcessItems} /> }
                <div className="w-full px-10 bg-custom-box rounded-xl ">

                </div>
            </div>
        </div>
    </div>
  )
}

export default App
