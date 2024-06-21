import checkBlackIcon from "../../assets/checkmark-black.svg";
interface StepProps{
    title:string
}
const Step = ({title}:StepProps)=>{
    return (
        <div className="relative space-x-10 flex items-center justify-start">
            <div
                className={`h-full relative  py-10 z-0 border-l-2 border-selected-item`}>
                <div className={'absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-50'}>
                    <div
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center text-center rounded-full text-lg font-semibold bg-selected-item`}>
                            <img src={checkBlackIcon} alt={'checked'} className={'w-8 h-8'}/>

                    </div>
                </div>

            </div>
            <div
                className={`'text-lg font-medium text-white`}>{title}</div>

        </div>
    )
}
export default Step