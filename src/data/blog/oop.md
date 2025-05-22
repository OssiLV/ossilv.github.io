---
title: "OOP"
desc: "OOP"
author: ossilv # references `src/data/authors/ossilv.json`
relatedPosts: []
prevPost: none
nextPost: none
pubDate: 2025-04-07
updatedDate: 2025-04-07
tags: ["system", "dessign-pattern"]
categories:
    - name: "Design Pattern"
      subcategories: []
---

# OOP là gì ?

OOP là viết tắt của Object-Oriented Programming – Lập trình hướng đối tượng.

Đây là một phương pháp lập trình dựa trên **đối tượng (object)** để tổ chức code.

## 4 đặc điểm chính của OOP

### 1. Encapsulation (Tính đóng gói)

Giấu dữ liệu và logic bên trong đối tượng, chỉ cho phép truy cập thông qua **các thuộc tính (properties)** hoặc **phương thức (methods)** công khai.

Ví dụ: Bạn không cần biết cách một chiếc xe hoạt động bên trong để lái nó – bạn chỉ dùng vô-lăng, chân ga, thắng,...

```csharp
public class Person
{
    private string name; // Biến private (ẩn với bên ngoài)

    public void SetName(string newName)  // Method công khai
    {
        name = newName;
    }

    public string GetName()
    {
        return name;
    }
}

```

### 2. Inheritance (Tính kế thừa)

Một lớp có thể kế thừa thuộc tính và hành vi từ một **lớp khác (gọi là lớp cha)**. Giúp tái sử dụng mã, giảm lặp code.

Ví dụ: Lớp `Dog` và `Cat` đều có thể kế thừa từ lớp `Animal`.

```csharp
public class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating...");
    }
}

public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Barking...");
    }
}
```

```csharp
Dog myDog = new Dog();
myDog.Eat();  // Kế thừa từ Animal
myDog.Bark(); // Hành vi riêng
```

### 3. Polymorphism (Tính đa hình)

Một phương thức hoặc đối tượng có thể hoạt động theo nhiều cách khác nhau thông qua **ghi đè (override)** hoặc **nạp chồng (overload)**.

Tăng tính linh hoạt và mở rộng của chương trình.

Ví dụ: Hàm `speak()` có thể được lớp `Dog` thực hiện bằng cách sủa, còn `Cat` thì kêu meo meo.

-   **Ghi đè (Override – runtime polymorphism)**

```csharp
public class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal speaks");
    }
}

public class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Dog barks");
    }
}
```

```csharp
Animal a = new Dog();
a.Speak();  // Output: Dog barks
```

-   **Nạp chồng (Overload – compile-time polymorphism)**

```csharp
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
}
```

### 4. Abstraction (Tính trừu tượng)

Ẩn các chi tiết phức tạp, chỉ hiển thị chức năng cần thiết thông qua lớp **trừu tượng (abstract)** hoặc `interface`.

Đơn giản hóa việc thiết kế hệ thống, chỉ tập trung vào những gì cần thiết.

-   **Ví dụ với abstract class**

```csharp
public abstract class Shape
{
    public abstract void Draw();
}

public class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing Circle");
    }
}
```

-   **Ví dụ với interface**

```csharp
public interface IVehicle
{
    void Drive();
}

public class Car : IVehicle
{
    public void Drive()
    {
        Console.WriteLine("Car is driving");
    }
}
```
