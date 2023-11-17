import { pgTable, timestamp, uuid, text} from "drizzle-orm/pg-core";


export const workspace = pgTable('workspaces', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at',{
        withTimezone: true,
        mode: 'string'
    }),
    workspaceOwner: uuid('workspace_owner').notNull(),
    title: text('title').notNull(),
    iconId:text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    logo: text('logo'),
    bannerUrl: text('banner_URL'),
})

export const folders = pgTable('folders', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    })
      .defaultNow()
      .notNull(),
    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    bannerUrl: text('banner_url'),
    workspaceId: uuid('workspace_id')
      .notNull()
      .references(() => workspace.id, {
        onDelete: 'cascade',
      }),
  });
  
  export const files = pgTable('files', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    })
      .defaultNow()
      .notNull(),
    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    bannerUrl: text('banner_url'),
    workspaceId: uuid('workspace_id')
      .notNull()
      .references(() => workspace.id, {
        onDelete: 'cascade',
      }),
    folderId: uuid('folder_id')
      .notNull()
      .references(() => folders.id, {
        onDelete: 'cascade',
      }),
  });