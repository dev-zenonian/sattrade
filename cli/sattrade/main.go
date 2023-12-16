package main

import (
	"errors"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/urfave/cli/v2"
)

var apiKey string

func init() {
	err := godotenv.Load(".be.env")
	if err != nil {
		fmt.Println("load environment error", err)
	}
	apiKey = os.Getenv("COIN_MARKET_CAP_API_KEY")
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

					if queryType == "listing" {
						return QueryListing()
					} else if queryType == "info" {
						return QueryInfo()
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
