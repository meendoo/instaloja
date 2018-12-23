import React from 'react'

export default function Tick({centered, white}) {
    const styles = {
        width: '100px',
        height: '2px',
        position: 'relative',
        backgroundColor: `${white ? 'var(--white)' : 'var(--red)'}`,
        margin: `1.5rem ${centered ? 'auto' : '0'} 0`
    }
    return (
        <div style={styles}></div>
    )
}
