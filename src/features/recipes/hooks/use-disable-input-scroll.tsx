import { useEffect } from 'react'

const useDisableInputScroll = (elementIds: string[]) => {
	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			event.preventDefault()
		}

		const addWheelListener = (id: string) => {
			const element = document.getElementById(id)
			if (element) {
				element.addEventListener('wheel', handleWheel)
				element.classList.add('no-spin')
			}
		}

		const removeWheelListener = (id: string) => {
			const element = document.getElementById(id)
			if (element) {
				element.removeEventListener('wheel', handleWheel)
				element.classList.add('no-spin')
			}
		}

		elementIds.forEach((id) => {
			addWheelListener(id)
		})

		return () => {
			elementIds.forEach((id) => {
				removeWheelListener(id)
			})
		}
	}, [elementIds])
}

export default useDisableInputScroll
