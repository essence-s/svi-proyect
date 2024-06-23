import Select from "react-select";




export default function CustomSelect({ border, ...props }) {


    const customStyles = {
        option: (provided, state) => ({

            // ...provided,
            // ':hover': {
            //     backgroundColor: '#9999993b', // Color de fondo en hover
            // },
            backgroundColor: state.isSelected ? 'var(--secondary-color)' : state.isFocused ? '#9999993b' : 'transparent', // Color de fondo normal
            // backgroundColor: state.isClick ? 'red' : 'transparent',
            color: state.isSelected ? 'black' : 'var(--text-primary)',
            padding: '10px',
        }),
        control: (provided, state) => ({
            // none of react-select's styles are passed to <Control />
            // ...provided,
            display: 'flex',
            border: border ? 'solid 1px var(--border-color)' : 0,
            background: 'transparent',
            // ':hover': {
            //     borderColor: 'red' ,
            //     borderWidth: 0,
            //     boxShadow: '0 0 0 1px red'
            // },
            ':focus-within': {
                borderColor: 'none',
                borderWidth: 0,
                boxShadow: 'none',
                border: border ? 'solid 1px var(--border-color)' : 0
            },
            borderRadius: 'var(--border-radius-secondary)'
            //   width:'100%'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = 'var(--text-primary)'
            return { ...provided, opacity, transition, color };
        },
        menu: (provided) => ({
            ...provided,
            background: 'var(--primary-color)'
        })

    }

    return (
        <Select
            styles={customStyles}
            // // styles={{}}
            // id="selectbox"
            // instanceId="selectbox"
            // options={clients.map((client) => ({ value: client.id, label: client.name }))}
            // onChange={(dataC) => setInputClient(dataC)}
            // value={inputClient}
            options={[]}
            menuPlacement="auto"
            menuPosition="fixed"
            {...props}
        ></Select>)
}