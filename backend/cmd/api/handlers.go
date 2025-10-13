package main
import (
	"net/http"
	"fmt"
)
func Hello(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, World")

} 