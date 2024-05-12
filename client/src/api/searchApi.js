import $axiosInstance from "./axiosInstance"


export const getAnnouncements = async () => {
    try {
        const response = await $axiosInstance.get("/announcements/get-announcements")
        return response.data
    } catch (error) {
        throw new Error(`Помилка при парсингу даних: ${error}`)
    }
}