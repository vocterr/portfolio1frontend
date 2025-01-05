import {
    User, Account, UserSettings, Team, TeamMember,
    Project, ProjectMember, Task, Subtask, Label,
    Document, DocumentVersion, Comment, Attachment,
    ActivityLog, Notification
} from "./types";

// Placeholder JSON type
type JSONContent = Record<string, any>;

// Default UserSettings
export const defaultUserSettings: UserSettings = {
    id: "",
    userId: "",
    user: null as unknown as User, // Break circular reference
    theme: "",
    locale: "",
    emailOptIn: true,
};

// Default User
export const defaultUser: User = {
    id: "",
    email: "",
    name: "",
    avatarUrl: "",
    password: "",
    accounts: [],
    teams: [],
    projects: [],
    assignedTasks: [],
    comments: [],
    editedDocuments: [],
    createdDocumentVersions: [],
    activities: [],
    notifications: [],
    settings: defaultUserSettings,
    createdAt: new Date(), // Fixed: Use Date directly
    updatedAt: new Date(),
};

// Resolve circular reference
defaultUserSettings.user = defaultUser;

// Default Team
export const defaultTeam: Team = {
    id: "",
    name: "",
    description: "",
    members: [],
    projects: [],
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default TeamMember
export const defaultTeamMember: TeamMember = {
    id: "",
    teamId: "",
    userId: "",
    role: "MEMBER",
    team: null as unknown as Team,
    user: null as unknown as User,
};

// Default Project
export const defaultProject: Project = {
    id: "",
    teamId: "",
    team: null as unknown as Team,
    name: "New Project",
    description: "",
    visibility: "PRIVATE",
    projectMembers: [],
    tasks: [],
    documents: [],
    labels: [],
    acitivies: [],
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default ProjectMember
export const defaultProjectMember: ProjectMember = {
    id: "",
    projectId: "",
    userId: "",
    role: "MEMBER",
    project: null as unknown as Project,
    user: null as unknown as User,
};

// Default Task
export const defaultTask: Task = {
    id: "",
    projectId: "",
    project: null as unknown as Project,
    title: "",
    description: "",
    status: "TODO",
    priority: 0,
    labels: [],
    assignedTo: [],
    subtasks: [],
    comments: [],
    attachments: [],
    activities: [],
    dueDate: new Date().toISOString(), // Use ISO string for dueDate if needed
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default Subtask
export const defaultSubtask: Subtask = {
    id: "",
    taskId: "",
    task: null as unknown as Task,
    title: "",
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default Label
export const defaultLabel: Label = {
    id: "",
    projectId: "",
    project: null as unknown as Project,
    name: "",
    color: "",
    tasks: [],
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default Document
export const defaultDocument: Document = {
    id: "",
    projectId: "",
    project: null as unknown as Project,
    title: "",
    content: {} as JSONContent,
    lastEditedBy: null as unknown as User,
    lastEditedById: "",
    versions: [],
    comments: [],
    activities: [],
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default DocumentVersion
export const defaultDocumentVersion: DocumentVersion = {
    id: "",
    documentId: "",
    document: null as unknown as Document,
    content: {} as JSONContent,
    createdById: "",
    createdBy: null as unknown as User,
    createdAt: new Date(),
};

// Default Comment
export const defaultComment: Comment = {
    id: "",
    authorId: "",
    author: null as unknown as User,
    taskId: "",
    task: null as unknown as Task,
    documentId: "",
    document: null as unknown as Document,
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Default Attachment
export const defaultAttachment: Attachment = {
    id: "",
    taskId: "",
    task: null as unknown as Task,
    fileUrl: "",
    fileName: "",
    fileType: "",
    fileSize: 0,
    createdAt: new Date(),
};

// Default ActivityLog
export const defaultActivityLog: ActivityLog = {
    id: "",
    userId: "",
    user: null as unknown as User,
    taskId: "",
    task: null as unknown as Task,
    projectId: "",
    project: null as unknown as Project,
    documentId: "",
    document: null as unknown as Document,
    action: "",
    meta: {} as JSONContent,
    createdAt: new Date(),
};

// Default Notification
export const defaultNotification: Notification = {
    id: "",
    userId: "",
    user: null as unknown as User,
    message: "",
    read: false,
    createdAt: new Date(),
};
