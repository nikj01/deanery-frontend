import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {usePerson} from "../store.jsx";
import {useEffect} from "react";
import {useAuth} from "../../../context/hooks/useAuth.jsx";

const PersonPage = () => {
// function PersonPage() {
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
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Surname
                </Typography>
                <Typography>
                    {person.surname}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Name
                </Typography>
                <Typography>
                    {person.name}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Patronymic
                </Typography>
                <Typography>
                    {person.patronymic}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Date of birth
                </Typography>
                <Typography>
                    {person.dateOfBirth}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Email
                </Typography>
                <Typography>
                    {person.email}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    href="/main"

                >
                    To main
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onBtnClick}
                    sx={{mt: '1rem'}}
                >
                    More
                </Button>
            </CardActions>
        </Card>
    );
}
export default PersonPage;
