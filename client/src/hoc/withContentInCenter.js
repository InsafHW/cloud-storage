const withContentInCenter = (Component) => {
    return () => (
        <div className={'contentInCenter'}>
            <Component />
        </div>
    )
}

export {
    withContentInCenter
}
