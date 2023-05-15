import {devtools} from "zustand/middleware";
import {useContext} from "react";
import axios from "../../api/axios_helper";
import {create} from "zustand";
import {AuthContext} from "../../context/AuthContext.jsx";

export const usePerson = create(devtools((set, get) => ({
    person: null,
    loading: false,
    error: null,

    fetchPerson: async () => {
        const {personId} = useContext(AuthContext);
        set({loading: true})

        try {
            const person = await axios.get(`/people/${personId}`);

            if (!person.ok) throw new Error('На жаль, не вдалося завантажити особисті дані. Спробуйте ще раз')

            set({person: await person.json(), error: null})
        } catch (error) {
            set({error: error.message})
        } finally {
            set({loading: true})
        }
    }
})))
