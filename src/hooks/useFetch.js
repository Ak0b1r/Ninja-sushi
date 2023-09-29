import { useEffect, useState } from 'react'

function useFetch() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        async function getData() {
            setLoading(true)
            try {
                const response = await fetch(`https://fayzullaev99.github.io/sushi-data/data.json`)
                const res = await response.json()
                setData(res)
                setLoading(false)
            } catch (err) {
                setError(err?.message)
                setLoading(false)
            }
        }
        getData()
    }, [])
    return [data, loading, error]
}

export default useFetch