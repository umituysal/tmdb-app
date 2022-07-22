import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TvList from "../../components/TvList";

import usePopular from "../../hooks/usePopular";

function TvShows() {
    const [selected, setSelected] = useState('tv')
    const { tv } = usePopular(selected, setSelected)

    return (
        <>
            <Header />
            <TvList tv={tv.data[0]}
                status={tv.status}
                error={tv.error} />
            <Footer />
        </>
    );
}

export default TvShows