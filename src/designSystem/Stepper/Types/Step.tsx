import checkBlackIcon from "../../../assets/checkmark-black.svg";
interface StepProps{
    isCompleted : boolean;
    isActive:boolean;
    title:string
    step:number
}
const Step = ({isCompleted,isActive,title,step}:StepProps)=>{
    return (
        <div className="relative space-x-10 flex items-center justify-start">
            <div
                className={`h-full relative  py-10 z-0 border-l-2 ${isCompleted || isActive ? 'border-selected-item' : 'border-stepper-disable'}`}>
                <div className={'absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-50'}>
                    <div
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center text-center rounded-full text-lg font-semibold ${isActive || isCompleted ? 'bg-selected-item ' : 'bg-stepper-disable'} ${isActive && 'border-4 border-green-700 pb-0.5'}`}>
                        {isCompleted && (
                            <img src={checkBlackIcon} alt={'checked'} className={'w-8 h-8'}/>
                        )}
                        {!isCompleted && step}
                    </div>
                </div>

            </div>
            <div
                className={`'text-lg font-medium ${isActive ? 'text-white' : 'text-stepper-disable'}`}>{title}</div>

        </div>
    )
}
export default Step