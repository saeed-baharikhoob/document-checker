import { useState } from 'react';
import  docIcon from '../assets/doc-icon.svg'
import  whiteFolderIcon from '../assets/white-folder.svg'
import  yellowFolderIcon from '../assets/yellow-folder.svg'
import Button from "../designSystem/Button.tsx";
import {items} from "../utils/data";
import {ListItem} from "../utils/types";

interface  HorizontalListProps{
    selectedItem : (item : ListItem)=>void
}

const HorizontalList = ({selectedItem}:HorizontalListProps) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="flex overflow-x-auto space-x-4 p-4  overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`flex-shrink-0 w-full max-w-sm md:max-w-lg h-48 p-4 rounded-lg shadow-md flex items-center justify-between transition-colors duration-300 ${
                        selectedId === item.id ? 'bg-selected-item' : 'bg-white'
                    } ${selectedId && selectedId !== item.id ? 'opacity-50' : ''}`}
                    onClick={() => {
                        setSelectedId(item.id)
                        selectedItem(item)
                    }}
                >
                    <div className="flex flex-col items-start justify-start space-y-5 pr-3 ">
                        <div className={'flex flex-col items-start justify-start  space-y-4'}>
                            <span className="text-base font-black">{item.title}</span>
                            <p className="text-xs font-semibold ">{item.description}</p>
                        </div>
                        <Button type={'black-rounded'} icon={whiteFolderIcon} selectedIcon={yellowFolderIcon}
                                isSelected={!!selectedId && selectedId === item.id} disabled={!!selectedId && selectedId !== item.id} customCss={`px-7  ${!!selectedId && selectedId === item.id && `text-yellow-400`}`} onClick={()=>{}}>
                            Check
                        </Button>
                    </div>
                    <div className="flex-shrink-0">
                        <img src={docIcon} alt={'docIcon'} className="w-full h-full object-contain"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HorizontalList;
