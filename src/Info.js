import React, { useEffect, useState } from 'react';

function Info({ url, id, name }) {
    let [data, setData] = useState({});
    let [shownPokemonId, setShownPokemonId] = useState(null);
    let [see, setSee] = useState(true);

    let fetchAllPokemonDetail = async () => {
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
    }

    useEffect(() => {
        fetchAllPokemonDetail();
    }, [url]);

    // onclick pokemonDetail appear in right side
    let handleShowDetail = (e, pokemonId) => {
        e.preventDefault();
        setShownPokemonId(prevPokemonId => prevPokemonId === pokemonId ? null : pokemonId);
    }

    return (
        <>
            <div className='m-3' style={{ width: '36vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }} value={id} onClick={(e) => handleShowDetail(e, id)}>
                <img src={data?.sprites?.back_default} className='rounded-circle' style={{ width: '20vw', height: '20vw' }} />
                <h1 style={{ fontWeight: '600', fontSize: '4vw', color: '#3495e1' }}>{name}</h1>
            </div>
            {/* show on click */}
            {shownPokemonId === id ?
                <div className='mr-10' id={id} style={{ width: '36vw' }}>
                    <h3 style={{ fontSize: '2.3vw' }}><span style={{ color: 'red', fontSize: '2.3vw' }}>Ability:</span>{" "}{data.abilities[0].ability.name}</h3>
                    <h3 style={{ fontSize: '2.3vw' }}><span style={{ color: 'red', fontSize: '2.3vw' }}>Forms:</span>{" "}{data.forms[0].name}</h3>
                    <h3 style={{ fontSize: '2.3vw' }}><span style={{ color: 'red', fontSize: '2.3vw' }}>Species:</span>{" "}{data.species.name}</h3>

                    <h3 style={{ fontSize: '2.3vw', fontWeight: '600', color: '#7281d4' }} onClick={() => setSee(!see)}>Other Info...</h3>

                    {!see ?
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '2vw', color: 'blue' }}>Moves Details</h3>
                            <div style={{ display: 'flex', alignItems: 'center', overflowY: 'auto' }}>
                                {data?.moves?.map((move, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: '2vw', padding: '2vw', backgroundColor: 'grey', borderRadius: '1.2vw' }}>
                                        <h3 style={{ fontSize: '1.5vw' }}><a style={{ fontSize: '1.5vw', color: '#88c4ce', fontWeight: '500' }}>Moves:</a>{" "}{move.move.name}</h3>
                                        <h3 style={{ fontSize: '1.5vw' }}><a style={{ fontSize: '1.5vw', color: '#88c4ce', fontWeight: '500' }}>Methods:</a>{" "}{move.version_group_details[0].move_learn_method.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div> : null}
                </div> : null}
        </>
    )
}

export default Info;
