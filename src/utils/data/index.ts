import {ListItem} from "../types";

export const items: ListItem[] = [
    {
        id: 1,
        title: 'Title Of document',
        description: 'Some description here. Some description here.Some description here.',
        steps:[
            {step: 1, title: 'Create account Test 1', type: 'titleOnly', value: ''},
            {step: 2, title: 'Schedule appointment Test 1', type: 'text', value :"Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit sagittis."},
            {step: 3, title: 'Add employees Test 1', type: 'upload',value: ''},
        ],
        checkProcessItems:[
            {id:1 ,title : "First Required Action For Check"},
            {id:2 ,title : "Second Required Action For Check"},
            {id:3 ,title : "third Required Action For Check"},
            {id:4 ,title : "Forth Required Action For Check"},
            {id:5 ,title : "Fifth Required Action For Check"},
            {id:6 ,title : "Sixth Required Action For Check"},
            {id:7 ,title : "The Last Required Action For Check"},
        ]
    },
    {
        id: 2,
        title: 'Title Of document',
        description: 'Some description here. Some description here.Some description here.',
        steps:[
            {step: 1, title: 'Create account Test 2', type: 'titleOnly', value: ''},
            {step: 2, title: 'Schedule appointment Test 2', type: 'text', value :"Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit sagittis."},
            {step: 3, title: 'Add employees Test 2', type: 'upload',value: ''},
        ],
        checkProcessItems:[
            {id:1 ,title : "First Required Action For Check"},
            {id:2 ,title : "Second Required Action For Check"},
            {id:3 ,title : "third Required Action For Check"},
            {id:4 ,title : "Forth Required Action For Check"},
            {id:5 ,title : "Fifth Required Action For Check"},
            {id:6 ,title : "Sixth Required Action For Check"},
            {id:7 ,title : "The Last Required Action For Check"},
        ]
    },
    {
        id: 3,
        title: 'Title Of document',
        description: 'Some description here. Some description here.Some description here.',
        steps:[
            {step: 1, title: 'Create account Test 3', type: 'titleOnly', value: ''},
            {step: 2, title: 'Schedule appointment Test 3', type: 'text', value :"Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit sagittis."},
            {step: 3, title: 'Add employees Test 3', type: 'upload',value: ''},
        ],
        checkProcessItems:[
            {id:1 ,title : "First Required Action For Check"},
            {id:2 ,title : "Second Required Action For Check"},
            {id:3 ,title : "third Required Action For Check"},
            {id:4 ,title : "Forth Required Action For Check"},
            {id:5 ,title : "Fifth Required Action For Check"},
            {id:6 ,title : "Sixth Required Action For Check"},
            {id:7 ,title : "The Last Required Action For Check"},
        ]
    },
];