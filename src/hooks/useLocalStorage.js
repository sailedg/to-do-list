import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);

            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemName]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}


export { useLocalStorage }


// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Lavar la loza", completed: false },
//   { text: "Leer un capitulo de un libro", completed: false },
//   { text: "Bañar al perro", completed: false },
//   { text: "Estudiar React", completed: false },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");
