import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: { "X-Api-Key": "UqIfwoQNL8IYsUPW+N7oNg==tOhwzzlSPPE5yTgg" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch weather data");
    return res.json();
  });

export default function useCityData() {
  return useSWR("https://api.api-ninjas.com/v1/city?name=Kadaň", fetcher);
}
