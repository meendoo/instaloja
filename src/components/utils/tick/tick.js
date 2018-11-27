import React from 'react'

export default function Tick() {
    const styles = {
        width: '100px',
        height: '2px',
        position: 'relative',
        backgroundColor: 'var(--red)',
        margin: '1.5rem 0 0'
    }
    return (
        <div style={styles}></div>
    )
}
