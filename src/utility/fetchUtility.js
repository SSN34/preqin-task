

export function fetchDataUtility(serviceHandler, setterFunction, props=[]){

    serviceHandler(props).then(data => {
        setterFunction(data);
    });
}