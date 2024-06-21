import Button from "../../Button.tsx";

interface StepperCompleteProps{
    handleNext:any
}
const StepperComplete = ({handleNext}:StepperCompleteProps)=>{
    return(
        <div className={'flex flex-col space-y-5'}>
            <span className={'text-sm leading-loose font-medium text-stepper-text-type max-w-sm'}>
                You have provided all requirement documents and informations. Please click <strong className={'font-bold'}>Start Checking</strong> to start the procedure
            </span>
            <div className={'flex space-x-5 h-12'}>

                <Button type={'yellow'} onClick={handleNext}>
                    Start Checking
                </Button>
            </div>
        </div>
    )
}
export default StepperComplete