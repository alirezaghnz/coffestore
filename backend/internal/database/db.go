package database

import (
	"database/sql"
	"flag"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

// initalize and stores the global DB connection
func InitDB(){
	// Define commnand-line flags
	dsn := flag.String("dsn", "host=localhost user=postgres password=admin dbname=coffee port=5432 sslmode=disable connect_timeout=5 timezone=UTC", "PostgreSQL connection string")
	

	// 
	db, err := sql.Open("postgres",*dsn)
	if err != nil {
		log.Fatal("DB not opened",err)
	}

	err =db.Ping()
	if err != nil {
		log.Fatal("Error with connect db", err)
	}

	fmt.Println("DB connected succ")

	DB = db

}