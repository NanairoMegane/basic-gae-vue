package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
)

func main() {

	r := chi.NewRouter()

	cors := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:4000"},
		AllowedMethods: []string{"GET"},
	})
	r.Use(cors.Handler)
	r.Use(middleware.Logger)

	r.Get("/api/test", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "This is Server Response. Now time is : %v", time.Now())
	})

	log.Print("Start Server")

	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatal(err)
	}
}
