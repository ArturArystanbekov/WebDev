if __name__ == "__main__":
    a, b, c, d = map(int, input().split())
    print(min(a, b, c, d))
    
def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result
