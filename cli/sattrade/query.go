package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
	"sattrade/query"
	"strconv"
)

func QueryListing() error {
	client := http.Client{}
	resp, err := query.GetCryptocurrenciesLatestListings(client, apiKey)
	if err != nil {
		return fmt.Errorf("query info failed %v", err)
	}
	var bodyData map[string]any
	err = json.Unmarshal(resp, &bodyData)
	if err != nil {
		return fmt.Errorf("parse body error %v", err)
	}
	prettyJson, _ := json.MarshalIndent(bodyData, "", "    ")
	_ = os.WriteFile("coin.json", prettyJson, 0644)
	fmt.Println(string(prettyJson))

	return nil
}

func QueryInfo() error {
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

	return nil
}
