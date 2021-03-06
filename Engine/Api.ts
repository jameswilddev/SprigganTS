/// <reference path="Types.ts" />

/** A sprite frame, imported from non-code content. */
declare abstract class SpriteFrame { }

/** A background frame, imported from non-code content. */
declare abstract class BackgroundFrame { }

/** A sound effect, imported from non-code content. */
declare abstract class Sound { }

/** A music track, imported from non-code content. */
declare abstract class Music { }

/** A line of dialog, imported from non-code content. */
declare abstract class Dialog { }

/** The width of the "safe zone", in virtual pixels. */
declare const WidthVirtualPixels: number

/** The height of the "safe zone", in virtual pixels. */
declare const HeightVirtualPixels: number

declare class Viewport {
    /** A "root" of the scene graph, which can be docked to screen borders.  The size of the virtual screen.
     * @param {?float} horizontalPositionSignedUnitInterval The horizontal alignment of the viewport relative to the screen or window; -1 is touching the left border, 0 centered, and 1 touching the right border.  Defaults to 0.
     * @param {?float} verticalPositionSignedUnitInterval The vertical alignment of the viewport relative to the screen or window; -1 is touching the top border, 0 centered, and 1 touching the bottom border.  Defaults to 0.
     * @param {?boolean} crop When true, children of the viewport will be "cropped" to its borders, including click actions.  When false, the borders of the viewport do not crop its children.  Defaults to false.
     * @param {?Function} onClick An optional callback to execute when the this Viewport or any of its children are clicked or tapped.  Childrens' events are fired first, and this will not be called if this Group is deleted by a child's event.
    */
    constructor(horizontalPositionSignedUnitInterval?: number, verticalPositionSignedUnitInterval?: number, crop?: boolean, onClick?: () => void)

    /** Pauses this Viewport and all its children; motion and animation will be paused until this Viewport is .Resume()-d.
     * Clicks will still trigger actions.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Pause(): Viewport

    /** Resumes this Viewport and all its children which are not themselves paused; motion and animation will resume from where they were .Pause()-d.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Resume(): Viewport

    /** Hides this Viewport and all its children; clicks will not trigger actions or block underlying scene objects being clicked until .Show()-n.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Hide(): Viewport

    /** Shows this Viewport and all its children which are not themselves hidden.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Show(): Viewport

    /** Disables this Viewport and all its children; clicks will not trigger actions until .Enable()-d.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Disable(): Viewport

    /** Enables this Viewport and all its children which are not themselves Disable-d.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Enable(): Viewport

    /** Gets the number of virtual pixels this Viewport is to the right of its "docked" position.
     * @returns {float} The number of virtual pixels this Viewport is to the right of its "docked" position..
     */
    VirtualPixelsFromLeft(): number

    /** Gets the number of virtual pixels this Viewport is below its "docked" position.
     * @returns {float} The number of virtual pixels this Viewport is below its "docked" position..
     */
    VirtualPixelsFromTop(): number

    /** Moves this Viewport to a specified location immediately. 
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Viewport to the right of its "docked" position.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Viewport below its "docked" position.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Move(virtualPixelsFromLeft: number, virtualPixelsFromTop: number): Viewport

    /** Moves this Viewport from its current location to a specified location over the course of a set duration.  Initially paused if this Viewport is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Viewport to the right of its "docked" position.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Viewport below its "docked" position.
     * @param {float} durationSeconds The number of seconds to take to reach the destination.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Viewport reaches the specified destination.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveOver(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, durationSeconds: number, onArrivingIfUninterrupted?: () => void): Viewport

    /** Moves this Viewport from its current location to a specified location at a set speed.  Initially paused if this Viewport is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Viewport to the right of its "docked" position.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Viewport below the parent scene object's origin.
     * @param {float} pixelsPerSecond The number of pixels to cover per second.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Viewport reaches the specified destination.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveAt(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, pixelsPerSecond: number, onArrivingIfUninterrupted?: () => void): Viewport

    /** Removes this Viewport and all its children from the scene graph.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Delete(...).VirtualPixelsFromLeft(...)).
     */
    Delete(): Viewport

    /** Plays a Sound from this Viewport's center, using positional audio if available.
     * @param {Sound} sound The Sound to play.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlaySound(sound: Sound): Viewport

    /** Plays a line of Dialog from this Viewport's center, using positional audio if available.
     * @param {Dialog} dialog The Dialog to play.
     * @returns {Viewport} This Viewport, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlayDialog(dialog: Dialog): Viewport
}

declare class Group {
    /** An invisible grouping of Group and/or Sprite scene objects. 
     * @param {Viewport | Group} parent The parent scene object to add the new Group to.
     * @param {?Function} onClick An optional callback to execute when the this Group or any of its children are clicked or tapped.  Childrens' events are fired first, and this will not be called if this Group is deleted by a child's event.
    */
    constructor(parent: Viewport | Group, onClick?: () => void)

    /** Pauses this Group and all its children; motion and animation will be paused until this Group is Resume -d.
     * Clicks will still trigger actions.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Pause(): Group

    /** Resumes this Group and all its children which are not themselves paused; motion and animation will resume from where they were .Pause()-d.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Resume(): Group

    /** Hides this Group and all its children; clicks will not trigger actions or block underlying scene objects being clicked until .Show()-n.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Hide(): Group

    /** Shows this Group and all its children which are not themselves hidden.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Show(): Group

    /** Disables this Group and all its children; clicks will not trigger actions until .Enable()-d.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Disable(): Group

    /** Enables this Group and all its children which are not themselves Disable-d.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Enable(): Group

    /** Gets the number of virtual pixels this Group is to the right of the parent scene object's origin.
     * @returns {float} The number of virtual pixels this Group is to the right of the parent scene object's origin.
     */
    VirtualPixelsFromLeft(): number

    /** Gets the number of virtual pixels this Group is below the parent scene object's origin.
     * @returns {float} The number of virtual pixels this Group is below the parent scene object's origin.
     */
    VirtualPixelsFromTop(): number

    /** Moves this Group to a specified location immediately. 
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Group to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Group below the parent scene object's origin.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Move(virtualPixelsFromLeft: number, virtualPixelsFromTop: number): Group

    /** Moves this Group from its current location to a specified location over the course of a set duration.  Initially paused if this Group is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Group to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Group below the parent scene object's origin.
     * @param {float} durationSeconds The number of seconds to take to reach the destination.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Group reaches the specified destination.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveOver(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, durationSeconds: number, onArrivingIfUninterrupted?: () => void): Group

    /** Moves this Group from its current location to a specified location at a set speed.  Initially paused if this Group is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Group to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Group below the parent scene object's origin.
     * @param {float} pixelsPerSecond The number of pixels to cover per second.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Group reaches the specified destination.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveAt(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, pixelsPerSecond: number, onArrivingIfUninterrupted?: () => void): Group

    /** Removes this Group and all its children from the scene graph.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Delete(...).VirtualPixelsFromLeft(...)).
     */
    Delete(): Group

    /** Plays a Sound from this Group, using positional audio if available.
     * @param {Sound} sound The Sound to play.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlaySound(sound: Sound): Group

    /** Plays a line of Dialog from this Group, using positional audio if available.
     * @param {Dialog} dialog The Dialog to play.
     * @returns {Group} This Group, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlayDialog(dialog: Dialog): Group
}

declare class Sprite {
    /** Displays a SpriteFrame inside a Viewport or Group. 
     * @param {Viewport | Group} parent The parent scene object to add the new Sprite to.
     * @param {?Function} onClick An optional callback to execute when the this Sprite is clicked or tapped.
    */
    constructor(parent: Viewport | Group, onClick?: () => void)

    /** Pauses this Sprite; motion and animation will be paused until this Sprite is Resume -d.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Pause(): Sprite

    /** Resumes this Sprite; motion and animation will resume from where they were .Pause()-d.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Resume(): Sprite

    /** Hides this Sprite; clicks will not trigger actions or block underlying scene objects being clicked until .Show()-n.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Hide(): Sprite

    /** Shows this Sprite.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Show(): Sprite

    /** Disables this Sprite; clicks will not trigger actions until .Enable()-d.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Disable(): Sprite

    /** Enables this Sprite.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Enable(): Sprite

    /** Plays a non-looping animation.  If no subsequent animation is played, the last frame remains visible.  Initially paused if this Sprite is .Pause()-d.
     * @param {SpriteFrame | SpriteFrame[]} animation An animation of one or more frames to play.
     * @param {?function} onCompletionIfUninterrupted An optional callback to execute if and when the animation completes.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    Play(animation: SpriteFrame | SpriteFrame[], onCompletionIfUninterrupted?: () => void): Sprite

    /** Plays a looping animation.  Initially paused if this Sprite is .Pause()-d.
     * @param {SpriteFrame | SpriteFrame[]} animation An animation of one or more frames to play.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    Loop(animation: SpriteFrame | SpriteFrame[]): Sprite

    /** Gets the number of virtual pixels this Sprite is to the right of the parent scene object's origin.
     * @returns {float} The number of virtual pixels this Sprite is to the right of the parent scene object's origin.
     */
    VirtualPixelsFromLeft(): number

    /** Gets the number of virtual pixels this Sprite is below the parent scene object's origin.
     * @returns {float} The number of virtual pixels this Sprite is below the parent scene object's origin.
     */
    VirtualPixelsFromTop(): number

    /** Moves this Sprite to a specified location immediately. 
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Sprite to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Sprite below the parent scene object's origin.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Move(virtualPixelsFromLeft: number, virtualPixelsFromTop: number): Sprite

    /** Moves this Sprite from its current location to a specified location over the course of a set duration.  Initially paused if this Sprite is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Sprite to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Sprite below the parent scene object's origin.
     * @param {float} durationSeconds The number of seconds to take to reach the destination.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Sprite reaches the specified destination.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveOver(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, durationSeconds: number, onArrivingIfUninterrupted?: () => void): Sprite

    /** Moves this Sprite from its current location to a specified location at a set speed.  Initially paused if this Sprite is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Sprite to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Sprite below the parent scene object's origin.
     * @param {float} pixelsPerSecond The number of pixels to cover per second.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Sprite reaches the specified destination.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveAt(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, pixelsPerSecond: number, onArrivingIfUninterrupted?: () => void): Sprite

    /** Removes this Sprite from the scene graph.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Delete(...).VirtualPixelsFromLeft(...)).
     */
    Delete(): Sprite

    /** Plays a Sound from this Sprite, using positional audio if available.
     * @param {Sound} sound The Sound to play.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlaySound(sound: Sound): Sprite

    /** Plays a line of Dialog from this Sprite, using positional audio if available.
     * @param {Dialog} dialog The Dialog to play.
     * @returns {Sprite} This Sprite, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlayDialog(dialog: Dialog): Sprite
}

declare class Background {
    /** Displays a BackgroundFrame inside a Viewport or Group.  May fail to load.  Does not block clicks.
     * @param {Viewport | Group} parent The parent scene object to add the new Background to.
     * @param {BackgroundFrame | BackgroundFrame[]} animation The BackgroundFrame(s) to play.
    */
    constructor(parent: Viewport | Group, animation: BackgroundFrame | BackgroundFrame[])

    /** Pauses this Background; motion and animation will be paused until this Background is Resume -d.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Pause(): Background

    /** Resumes this Background; motion and animation will resume from where they were .Pause()-d.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Resume(): Background

    /** Hides this Background.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Hide(): Background

    /** Shows this Background.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Show(): Background

    /** Gets the number of virtual pixels this Background is to the right of the parent scene object's origin.
     * @returns {float} The number of virtual pixels this Background is to the right of the parent scene object's origin.
     */
    VirtualPixelsFromLeft(): number

    /** Gets the number of virtual pixels this Background is below the parent scene object's origin.
     * @returns {float} The number of virtual pixels this Background is below the parent scene object's origin.
     */
    VirtualPixelsFromTop(): number

    /** Moves this Background to a specified location immediately. 
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Background to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Background below the parent scene object's origin.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    Move(virtualPixelsFromLeft: number, virtualPixelsFromTop: number): Background

    /** Moves this Background from its current location to a specified location over the course of a set duration.  Initially paused if this Background is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Background to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Background below the parent scene object's origin.
     * @param {float} durationSeconds The number of seconds to take to reach the destination.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Background reaches the specified destination.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveOver(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, durationSeconds: number, onArrivingIfUninterrupted?: () => void): Background

    /** Moves this Background from its current location to a specified location at a set speed.  Initially paused if this Background is .Pause()-d.
     * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place this Background to the right of the parent scene object's origin.
     * @param {integer} virtualPixelsFromTop The number of virtual pixels to place this Background below the parent scene object's origin.
     * @param {float} pixelsPerSecond The number of pixels to cover per second.
     * @param {?function} onArrivingIfUninterrupted An optional callback to execute if and when this Background reaches the specified destination.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
    */
    MoveAt(virtualPixelsFromLeft: number, virtualPixelsFromTop: number, pixelsPerSecond: number, onArrivingIfUninterrupted?: () => void): Background

    /** Removes this Background from the scene graph.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Delete(...).VirtualPixelsFromLeft(...)).
     */
    Delete(): Background

    /** Plays a Sound from this Background, using positional audio if available.
     * @param {Sound} sound The Sound to play.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlaySound(sound: Sound): Background

    /** Plays a line of Dialog from this Background, using positional audio if available.
     * @param {Dialog} dialog The Dialog to play.
     * @returns {Background} This Background, for chaining method calls "fluently" (.Move(...).Pause(...)).
     */
    PlayDialog(dialog: Dialog): Background
}

/** Creates a cheap "static sprite" which cannot be interacted with (no direct click handler, deletion, animation or motion controls).  This is intended for writing text, etc. as this would defer to the containing Viewport or Group for this functionality.
 * @param {Viewport | Group} parent The scene object to add a new static sprite to.
 * @param {SpriteFrame} frame The SpriteFrame to show.
 * @param {integer} virtualPixelsFromLeft The number of virtual pixels to place the new static sprite to the right of the parent scene object's origin.
 * @param {integer} virtualPixelsFromTop The number of virtual pixels to place the new static sprite below the parent scene object's origin.
 */
declare function AddStaticSprite(parent: Viewport | Group, frame: SpriteFrame, virtualPixelsFromLeft: number, virtualPixelsFromTop: number): void

/** Enters a transition, used to change scene.  An error will occur if this is called while a previous transition is in progress.  Input is blocked while entering or exiting a transition.
 * @param {TransitionStep} type The TransitionStep to show while entering the transition.
 * @param {TransitionStep} type The TransitionStep to show while exiting the transition.
 * @param {Function} call A function to call between the enter and exit phases of the transition; perform the actual scene change here.
 */
declare function Transition(entry: TransitionStep, exit: TransitionStep, call: () => void): void

/** A single looping track. */
declare namespace Music {
    /** Plays music.  If the music specified is already playing, nothing happens.  If other music is already playing, that music is stopped first. 
     * @param {Music} The music to play.
    */
    function Set(music: Music): void

    /** Stops the currently playing music, if any. */
    function Stop(): void
}

declare class Timer {
    /** A timer which fires one time after a specified delay.
     * @param {float} durationSeconds The number of seconds to wait before executing the callback.
     * @param {Function} onCompletionIfUninterrupted The function to call when the delay has passed.
     */
    constructor(durationSeconds: number, onCompletionIfUninterrupted: () => void)

    /** Pauses this Timer if not paused or cancelled or completed.
     * @returns {Timer} This Timer, for chaining method calls "fluently" (.Pause(...).DurationSeconds).
     */
    Pause(): Timer

    /** Resumes this Timer if paused and not cancelled or completed.
     * @returns {Timer} This Timer, for chaining method calls "fluently" (.Resume(...).DurationSeconds).
     */
    Resume(): Timer

    /** Cancels this Timer, effectively pausing it permanently.
     * @returns {Timer} This Timer, for chaining method calls "fluently" (.Cancel(...).DurationSeconds).
     */
    Cancel(): Timer
}

declare class RecurringTimer {
    /** A timer which fires repeatedly on a specified interval. 
     * @param {float} intervalSeconds The number of seconds between executions of the callback.
     * @param {Function} onInterval The function to call on each interval.
    */
    constructor(intervalSeconds: number, onInterval: () => void)

    /** Pauses this RecurringTimer if not paused or stopped.
     * @returns {RecurringTimer} This RecurringTimer, for chaining method calls "fluently" (.Pause(...).DurationSeconds).
     */
    Pause(): RecurringTimer

    /** Resumes this RecurringTimer if paused and not stopped.
     * @returns {RecurringTimer} This RecurringTimer, for chaining method calls "fluently" (.Resume(...).DurationSeconds).
     */
    Resume(): RecurringTimer

    /** Stops this RecurringTimer, effectively pausing it permanently.
     * @returns {RecurringTimer} This RecurringTimer, for chaining method calls "fluently" (.Stop(...).DurationSeconds).
     */
    Stop(): RecurringTimer
}

/** Persists JSON which can then be Load-ed later on, even after the game/device have restarted.
 * @param {string} name The name to save the JSON under.
 * @param {Json} data The data to save.
 * @returns {boolean} True if the data was saved, else, false.
 */
declare function Save(name: string, data: Json): void

/** Restores previously Save-d JSON.  Note that this cannot typecheck the contents of the Save-d JSON.
 * @param {string} name The name to load JSON from.
 * @returns {T | undefined} The loaded JSON, if any; undefined is returned if the JSON cannot be found or parsed.
 */
declare function Load<T extends Json>(name: string): T | undefined

/** Determines whether Save and Load are available.
 * @returns {boolean} True if Save and Load are available, else, false.
 */
declare function SaveAndLoadAvailable(): boolean