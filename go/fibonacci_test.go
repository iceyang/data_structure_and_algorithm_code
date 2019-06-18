package main

import (
	"testing"
)

// func fibonacci(n int) int {
// 	if n == 0 || n == 1 {
// 		return 1
// 	}
// 	return fibonacci(n-1) + fibonacci(n-2)
// }

func fibonacci(n int) int {
	if n == 0 || n == 1 {
		return 1
	}
	res := make([]int, n+1)
	res[0] = 1
	res[1] = 1
	for i := 2; i <= n; i++ {
		res[i] = res[i-1] + res[i-2]
	}
	return res[n]
}

func TestFibonacci(t *testing.T) {
	if fibonacci(5) != 8 {
		t.Fatalf("value should be 8")
	}
}
