# How Pick and Omit Keep TypeScript Code DRY
## Introduction
In large-scale TypeScript applications, managing large interfaces is a common challenge. Most of the time, a single domain model contains far more data than any single feature actually needs.

For example, a user profile may include id, email, password, avatar, and more—but a UI component might only need username and avatar.

If we don’t handle this properly, we either: Duplicate properties across multiple interfaces, or Pass large objects everywhere, increasing complexity and risk of misuse TypeScript utility types like Pick and Omit solve this problem by allowing us to create smaller, focused types from a single source of truth.

### Master Interface
Let’s start with a common example:
```Typescript 
interface UserProfile {
 id: string;
 username: string;
 email: string;
 avatarUrl: string;
 bio: string;
 phoneNumber: string;
 createdAt: Date;
 isAdmin: boolean;
}
```
This represents a full user model, but not every part of the app needs all of it.

## 1. Pick: Selecting Only What You Need
Pick creates a new type by selecting specific properties from an existing interface.
### Without Pick 
```Typescript
interface UserSidebarView {
 username: string;
 avatarUrl: string;
}
```
This works, but it duplicates logic already defined in UserProfile. If avatarUrl changes, you must update it manually here too.

### With Pick 
 ```Typescript 
 type UserSidebarView = Pick<UserProfile, "username" | "avatarUrl">;
 ```
Now the type is directly connected to UserProfile.
### Why this is better
1.No duplicated properties

2.Automatically stays in sync with the base interface

3.Easier to maintain in large projects

## 2. Omit: Removing What You Don’t Need
Omit works in the opposite way. It creates a new type by removing specific properties.
### Without Omit 
```Typescript
interface RegisterUserDTO {
 username: string;
 email: string;
 avatarUrl: string;
 bio: string;
 phoneNumber: string;
}
```
This is almost a copy of UserProfile, which leads to duplication and maintenance issues.

### With Omit 
```Typescript
type RegisterUserDTO = Omit<
 UserProfile,
 "id" | "createdAt" | "isAdmin"
>;
```
Now we reuse the original interface and only exclude unnecessary fields.
### Why this is better
1.Avoids repeating almost the entire interface

2.Keeps a single source of truth

3.Automatically includes new safe fields added later



### How Pick and Omit Improve Code Quality
#### Using these utility types helps maintain a clean and scalable architecture:
1.Single Source of Truth: All changes happen in one place

2.Less Refactoring: No need to update multiple duplicated interfaces

3.Better Consistency: Types stay aligned across the application

4.Improved Maintainability: Easier to scale large codebases
Instead of manually creating multiple similar interfaces, we derive them from a base type.

## Conclusion
Pick and Omit are simple but powerful TypeScript utility types that help you build cleaner and more maintainable applications.
By deriving smaller types from a single master interface, you avoid duplication, reduce errors, and keep your codebase consistent as it grows.

