//まずはstateの初期値が必要
const initialState = {
    clips: []
};

//reducerは前回のstate(old state)とactionを受け取ってnew stateを生成する
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIP':
            return {
                //old sateを展開する
                ...state,
                //old stateのclipsを展開する
                clips: [...state.clips, action.clip]
            }
        case 'DELETE_CLIP':
            return {
                ...state,
                //old stateのclipsからfilterで条件に当てはまる要素をのぞいた配列を返している
                clips: state.clips.filter(clip => clip.url !== action.clip.url),
            }

        //上記いずれのaction.typeにも該当しない場合は、前回のstateをそのまま返す
        default:
            return state;
    }
};

export default reducer;