export default async function News(params:any,res:any) {
  const response = await
  fetch("../../../news.json")
  const news = await response.json()
  res.status(200).json({news})
}
