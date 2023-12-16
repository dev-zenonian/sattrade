package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"sattrade/query"
	"strconv"

	"github.com/joho/godotenv"
	"github.com/urfave/cli/v2"
)

func init() {
	err := godotenv.Load(".be.env")
	if err != nil {
		fmt.Println("load environment error", err)
	}
}

func main() {
	app := &cli.App{
		Name:  "sattrade",
		Usage: "Working with sattrade from CLI",
		Action: func(*cli.Context) error {
			fmt.Println("Hello world! I'm Sattrade")
			return nil
		},
		Commands: []*cli.Command{
			{
				Name:  "query",
				Usage: "Query data from price API",
				Action: func(ctx *cli.Context) error {
					queryType := ctx.Args().Get(0)
					if queryType != "listing" && queryType != "info" {
						return errors.New("required type to query: listing|info")
					}

					apiKey := os.Getenv("COIN_MARKET_CAP_API_KEY")

					if queryType == "listing" {
						return nil
					} else if queryType == "info" {
						if _, err := os.Stat("coin.json"); err != nil {
							return errors.New("no coin.json found, need to run query listing first")
						} else {
							coins, _ := os.ReadFile("coin.json")
							var coinsInfo map[string]any
							err := json.Unmarshal(coins, &coinsInfo)
							if err != nil {
								return fmt.Errorf("can not read coin.json file %v", err)
							}

							data := coinsInfo["data"]
							dataBytes, err := json.Marshal(data)
							if err != nil {
								return fmt.Errorf("can not read coin.json file %v", err)
							}

							var coinData []query.SimpleInfo
							err = json.Unmarshal(dataBytes, &coinData)
							if err != nil {
								return fmt.Errorf("can not read coin.json file %v", err)
							}

							ids := []string{}
							for _, t := range coinData {
								ids = append(ids, strconv.FormatInt(int64(t.ID), 10))
							}

							client := http.Client{}
							resp, err := query.GetCryptocurrenciesInfo(client, apiKey, ids[:100])
							if err != nil {
								return fmt.Errorf("query info failed %v", err)
							}
							var bodyData map[string]any
							err = json.Unmarshal(resp, &bodyData)
							if err != nil {
								return fmt.Errorf("parse body error %v", err)
							}
							prettyJson, _ := json.MarshalIndent(bodyData, "", "    ")
							_ = os.WriteFile("meta.json", prettyJson, 0644)
							fmt.Println(string(prettyJson))
						}
					}

					return nil
				},
			},
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
