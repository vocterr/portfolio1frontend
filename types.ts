export interface User {
  id: string
  name: string
  email: string
  password: string
  profilePicture: string
  role: UserRole
  createdAt: string
  updatedAt: string

  //: Relations
  accounts: Account[]
  transactions: Transaction[]
  budgets: Budget[]
  goals: Goal[]
  aiInsights: AIInsight[]
  auditLogs: AuditLog[]
  notifications: Notification[]
  settings: Settings
}

export interface Account {
  id: string
  user: User
  userId: string
  type: AccountType
  name: string
  balance: number
  currency: string
  createdAt: string
  updatedAt: string

  //: Relations
  transactions: Transaction[]
}

export interface Transaction {
  id: string
  user: User
  userId: string
  account: Account
  accountId: string
  type: TransactionType
  category: string
  amount: number
  description: string
  date: string
  createdAt: string
  updatedAt: string
  _count: number

  //: Relations
  budgetAllocations: BudgetAllocation[]
}

export interface Budget {
  id: string
  user: User
  userId: string
  category: string
  allocatedAmount: number
  period: BudgetPeriod
  startDate: string
  endDate: string
  createdAt: string
  updatedAt: string

  //: Relations
  budgetAllocations: BudgetAllocation[]

}

export interface BudgetAllocation {
  id: string
  transaction: Transaction
  transactionId: string
  budget: Budget
  budgetId: string
  allocatedAmount: number
}

export interface Goal {
  id: string
  user: User
  userId: string
  title: string
  targetAmount: number
  currentAmount: number
  targetDate: string
  createdAt: string
  updatedAt: string
}

export interface AIInsight {
  id: string
  user: User
  userId: string
  type: AIInsightType
  content: string
  relevance: number
  createdAt: string
  updatedAt: string
}

export interface Notification {
  id: string
  user: User
  userId: string
  type: NotificationType
  message: string
  isRead: boolean
  link: string
  createdAt: string
  updatedAt: string
}

export interface Settings {
  id:                      String   
  user:                    User     
  userId:                  String   
  notificationPreferences: Record<string, any>     
  theme:                   Theme    
  twoFactorAuth:           boolean  
  createdAt:               string 
  updatedAt:               string
}

export interface AuditLog {
  id: string
  user: User
  userId: string
  action: string
  description: string
  ipAddress: string
  createdAt: string
}

export enum AccountType {
  CHECKING = "CHECKING",
  SAVINGS = "SAVINGS",
  CREDIT_CARD = "CREDIT_CARD",
  INVESTMENT = "INVESTMENT",
  CASH = "CASH"
}

export enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE"
}

export enum BudgetPeriod {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY"
}

export enum AIInsightType {
  RECOMMENDATION = "RECOMMENDATION",
  FORECAST = "FORECAST",
  TIP = "TIP"
}

export enum NotificationType {
  ALERT = "ALERT",
  REMINDER = "REMINDER",
  UPDATE = "UPDATE"
}

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK"
}

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  PREMIUM = "PREMIUM"
}