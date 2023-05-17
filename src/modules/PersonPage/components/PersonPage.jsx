import {Button, Card, CardContent, CardHeader, TextField, Typography} from "@mui/material";
import {usePerson} from "../store.jsx";
import {useEffect} from "react";
import {useAuth} from "../../../context/hooks/useAuth.jsx";

// const PersonPage = () => {
function PersonPage() {
    const {personId, password} = useAuth();

    const person = usePerson((state) => state.person);
    const fetchPerson = usePerson((state) => state.fetchPerson);

    const onBtnClick = () => {
        fetchPerson(personId, password);
    }

    useEffect(() => {
        fetchPerson(personId, password);
    }, [])

    console.log(person);

    return (
        <Card>
            <CardHeader title="Contact Info">
                <Typography variant="h5">Contact Info</Typography>
            </CardHeader>
            <CardContent>
                <TextField
                    label="Surname"
                    value={person.surname}
                    // onChange={(e) => setSurname(e.target.value)}
                />
                <TextField
                    label="Name"
                    value={person.name}
                    // onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Patronymic"
                    value={person.patronymic}
                    // onChange={(e) => setPatronymic(e.target.value)}
                />
                <TextField
                    label="Date of Birth"
                    value={person.dateOfBirth}
                    // onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <TextField
                    label="Email"
                    value={person.email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="outlined" color="primary" href="/main">
                    To main
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    // href="/about"
                    onClick={onBtnClick}
                >
                    About
                </Button>
            </CardContent>
        </Card>
    );

//     return (
//         <Card>
//             <CardHeader title="Contact Info">
//                 <Typography variant="h5">Contact Info</Typography>
//             </CardHeader>
//             <CardContent>
//                 <TextField
//                     label="Surname"
//                     value={1}
//                     // onChange={(e) => setSurname(e.target.value)}
//                 />
//                 <TextField
//                     label="Name"
//                     value={name}
//                     // onChange={(e) => setName(e.target.value)}
//                 />
//                 <TextField
//                     label="Patronymic"
//                     value={patronymic}
//                     // onChange={(e) => setPatronymic(e.target.value)}
//                 />
//                 <TextField
//                     label="Date of Birth"
//                     value={dateOfBirth}
//                     // onChange={(e) => setDateOfBirth(e.target.value)}
//                 />
//                 <TextField
//                     label="Email"
//                     value={email}
//                     // onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Button
//                     variant="outlined"
//                     color="primary"
//                     href="/main"
//                 >
//                     To main
//                 </Button>
//                 <Button
//                     variant="outlined"
//                     color="secondary"
//                     href="/about"
//                 >
//                     About
//                 </Button>
//                 <Button
//                     isLoading={loading}
//                     onClick={fetchPerson}
//                 >
//                     {!error ? 'Get person' : { error }}
//                 </Button>
//             </CardContent>
//         </Card>
//     );
// };
};
export default PersonPage;
