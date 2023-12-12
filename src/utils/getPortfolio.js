import Portfolio from "@/assets/data/portfolio.json";

export const getAllPortflio = async () => {
    const res = await fetch("../../../app/assets/data/portfolio.json")
    const data = await res.json()
    console.log(data);
    return data
}