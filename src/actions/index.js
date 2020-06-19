export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (feature) => {
    console.log('add Feature action called');
    return{
        type: ADD_FEATURE,
        payload: {
            additionalPrice: feature.price,
            newFeature: feature,
        },
    };
};