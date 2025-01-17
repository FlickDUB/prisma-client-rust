// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "namedUserType", input: never, result: Array<NamedUserInclude> } | 
        { key: "posts", input: never, result: Array<Post> } | 
        { key: "userNames", input: never, result: Array<{ displayName: string }> } | 
        { key: "users", input: never, result: Array<User> } | 
        { key: "usersWithPosts", input: never, result: Array<{ id: string, displayName: string, posts: Array<{ id: string, content: string, user: { id: string, displayName: string } }> }> },
    mutations: never,
    subscriptions: never
};

export interface Post { id: string, content: string, userId: string }

export interface User { id: string, displayName: string }

export interface NamedUserInclude { id: string, displayName: string, posts: Array<Post> }
