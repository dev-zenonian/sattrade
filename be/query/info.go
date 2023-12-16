package query

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
)

func GetCryptocurrenciesInfo(client http.Client, apiKey string, ids []string) ([]byte, error) {
	fmt.Println("start querying info...")
	req, err := http.NewRequest(
		"GET",
		"https://pro-api.coinmarketcap.com/v2/cryptocurrency/info",
		nil,
	)
	if err != nil {
		return nil, err
	}

	q := url.Values{}
	q.Add("id", strings.Join(ids, ","))
	q.Add("skip_invalid", "true")

	req.Header.Set("Accepts", "application/json")
	req.Header.Add("X-CMC_PRO_API_KEY", apiKey)
	req.URL.RawQuery = q.Encode()

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	return respBody, nil
}
