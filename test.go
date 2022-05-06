package main

import "fmt"

func main() {
	s := "hello"
	for v, i := range s {
		fmt.Printf("%T %T", v, i)
	}

	for i, l := 0, len(s); i < l; i++ {
		fmt.Printf("%T ", s[i])
	}
}
